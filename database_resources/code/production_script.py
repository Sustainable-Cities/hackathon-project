'''
Contribution for Database content for Solar Power Lead Generation and Prospecting Prototype Application to be used by Solar Panel vendors.
Prototype dataset describes commercial and Multi-Family developemnts in the city of Boston.
'''

# import libraries
import requests
import json
import numpy as np
import pandas as pd

# Local file for general pre-processing:
from function_library import *

def ranker(num,col_name):
    '''
    Dynamic percentile statistics for ranking and database support: Local functions apply to in-script DataFrame.
    Categroies have general string labels with concept that highest quartile is most energy intensive.
    This template may adjust for feature specific rank names or different criteria for rank selection.
    '''
    if num == 0.0:
        num = 'Good Case Client: Moderate Priority'
        return num
    elif num <= np.percentile(df[col_name],25) and num > 0:
        num = 'Long Term Benefit: Less Priority'
        return num
    elif num > np.percentile(df[col_name],25) and num <= np.percentile(df[col_name],50):
        num = 'Good Case Client: Moderate Priority'
        return num
    elif num > np.percentile(df[col_name],50) and num <= np.percentile(df[col_name],75):
        num = 'Ideal Client: High Priority'
        return num
    elif num > np.percentile(df[col_name],75):
        num = 'Energy Intensive: Highest Priority'
        return num
    else:
        num = 'Good Case Client: Moderate Priority'
        return num
    
# Ranking simple building size in sqft:
def sqft_ranker(num,col_name):
    '''
    Percentile ranking method for square footage size:
    '''
    if num == 0.0:
        num = 'Moderate sqft Space: Moderate Priority'
        return num
    elif num <= np.percentile(df[col_name],25) and num > 0:
        num = 'Less sqft: Less Priority'
        return num
    elif num > np.percentile(df[col_name],25) and num <= np.percentile(df[col_name],50):
        num = 'Moderate sqft Space: Moderate Priority'
        return num
    elif num > np.percentile(df[col_name],50) and num <= np.percentile(df[col_name],75):
        num = 'Larger sqft Space: High Priority'
        return num
    elif num > np.percentile(df[col_name],75):
        num = 'Highest sqft Space: Highest Priority'
        return num
    else:
        num = 'Moderate sqft Space: Moderate Priority'
        return num

# URL Inventory: Remote Data Retrieval

url19 = 'https://data.boston.gov/dataset/b09a8b71-274b-4365-9ce6-49b8b44602ef/resource/6a5bb842-0656-49c2-8f80-1e3fbcf5c913/download/berdo-data-for-disclosure-calendar-year-2018.xlsx'

url20 = 'https://data.boston.gov/dataset/b09a8b71-274b-4365-9ce6-49b8b44602ef/resource/033c30b4-8d28-40ad-9572-43d8455aaab6/download/berdo-disclosure-for-calendar-year-2019-final.xlsx'

# url_nextyear = ---

df19 = pd.read_excel(url19)
df20 = pd.read_excel(url20)
df = pd.concat([df19,df20])

# API call for join on shared address values: Remote SQL storage retrieval.
url_sql = 'https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20"391a32e6-d4bb-48d3-a990-cb35a5768a40"'

result = requests.get(url_sql)
dict2 = json.loads(result.text)
resultdf = pd.DataFrame(dict2)
df2 = pd.DataFrame(resultdf['result'][1])

# Select features for database support:
df = df[['Property Name','Property Type','Property Uses','Year Built',
                    'Address','ZIP',' Gross Area (sq ft) ','Site EUI (kBTU/sf)',
                   ' Total Site Energy (kBTU) ','% Electricity','GHG Intensity (kgCO2/sf)',]].copy()

# rename DataFrame columes to remove spaces, characters, and capital letters.
renames = ['property_name','property_type','property_uses','year_built',
                    'address','ZIP','gross_area_sqft','site_energy_usage_kBTU_sf',
                   'total_site_energy_kBTU','percentage_electricity','GHG_intensity_kgCO2_sf']

dropna_cols = ['address','ZIP','site_energy_usage_kBTU_sf','percentage_electricity']
float_cols = ['gross_area_sqft','site_energy_usage_kBTU_sf','GHG_intensity_kgCO2_sf']

# Multiple years were used for initial local data aggregation: Remove duplicates for unique addresses.
df = df.drop_duplicates(subset=['Address']).copy()
df.columns = renames
df.reset_index(inplace=True)
df.drop(columns='index',inplace=True)

# Cleaning and pre-processing: Datatype for each feature considered.
# Remove Null values:
df.fillna('Not Available',inplace=True)

for col in dropna_cols:
    df = df[df[col] != 'Not Available'].copy()

for col in float_cols:
    df[col] = df[col].map(na_fixer)

# Reduce property type categories:
df['property_type'] = df['property_type'].apply(type_namer)
df['property_type'].fillna('Other',inplace=True)
df['percentage_electricity'] = df['percentage_electricity'].astype(float)

func_list = [spell_fix,suffix_maker,char_remove,uppercase]

# Format address columns:
df['ZIP'] = df['ZIP'].map(zip_fix)
for func in func_list:
    df['address'] = df['address'].map(func)

# Processing for second DataFrame in advance of join:
df2.rename(columns={'owner_list':'owner','r_roof_typ':'roof_type','has_pv':'solar_panels_present'},inplace=True)

# Rename roof type categories for interpretability:
df2['roof_type'] = df2['roof_type'].map({'G':'Gable','F':'Flat','H':'Hip','M':'Mansard',
                                            'L':'L Shaped','S':'Sawtooth','O':'Unknown'})

fillna_cols = ['st_num','st_name','st_name_suf','owner','roof_type','num_floors','sqft_class']
address_cols = ['st_num','st_name','st_name_suf']

df2['solar_panels_present'].fillna('N',inplace=True)
df2['solar_panels_present'].where(df2['solar_panels_present']=='N','Y',inplace=True)

for col in fillna_cols:
    df2[col] = df2[col].fillna('Not Available',inplace=True)

df2['st_name_suf'] = df2['st_name_suf'].map(e_place)
df2['st_name_suf'] = df2['st_name_suf'].map(space_fix)
df2['st_num'] = df2['st_num'].map(str_make)
df2['st_num'] = df2['st_num'].map(space_fix_num)
df2['st_num'] = df2['st_num'].map(num_fix)

for col in address_cols:
    df2 = df2[df2[col] != 'Not Available'].copy()
    df2 = df2[df2[col] != 'NULL'].copy()
    df2 = df2[df2[col] != ' '].copy()

# Engineer address column in advance of join:
df2 = df2[df2['st_name_suf'] != 'nan'].copy()
df2['address'] = df2['st_num'] + ' ' + df2['st_name'] + ' ' + df2['st_name_suf']
df2['address'].fillna('NULL',inplace=True)
df2 = df2[df2['address'] != 'NULL'].copy()
df2['address'] = df2['address'].map(char_remove)

# Format and select columns for second DataFrame in advance of join:
df2 = df2.drop_duplicates(subset=['address']).copy()
df2.reset_index(inplace=True)
df2.drop(columns='index',inplace=True)

df2 = df2[['address','owner','solar_panels_present','roof_type','num_floors','sqft_class']].copy()
df2 = df2.copy()

# Left Join: Merge both DataFrames.
# df = df.merge(df2,how='left',left_on='address',right_on='address').copy()

# Feature engineering for analytics, ranking and electric unit conversion:
df['kBTU_from_electric'] = df['total_site_energy_kBTU'] * df['percentage_electricity']

# https://sciencing.com/calculate-kilowatt-hours-4902973.html
# BTU --> kWh conversion
df['kWh_annual_usage'] = df['kBTU_from_electric'] / 3.412
df['kWh_daily_usage'] = df['kWh_annual_usage'] / 365
df['GHG_daily_intensity'] = df['GHG_intensity_kgCO2_sf'] / 365

'''
Engineer with dynamic percentiles for ranking: Quartiles used as guidance in function:
https://stackoverflow.com/questions/45330312/pandas-dataframe-apply-raises-typeerror-for-providing-too-many-arguments
Possible adjustment of content of rank names for different features.
'''
df['customer_BTU_rank'] = df['site_energy_usage_kBTU_sf'].apply(ranker,args=(['site_energy_usage_kBTU_sf'])).copy()
df['customer_sqft_rank'] = df['gross_area_sqft'].apply(sqft_ranker,args=(['gross_area_sqft'])).copy()
df['customer_kWh_annual_rank'] = df['kWh_annual_usage'].apply(ranker,args=(['kWh_annual_usage'])).copy()
df['customer_kWh_daily_rank'] = df['kWh_daily_usage'].apply(ranker,args=(['kWh_daily_usage'])).copy()
df['customer_percent_electric_rank'] = df['percentage_electricity'].apply(ranker,args=(['percentage_electricity'])).copy()
df['customer_emissions_rank'] = df['GHG_intensity_kgCO2_sf'].apply(ranker,args=(['GHG_intensity_kgCO2_sf'])).copy()

# https://stackoverflow.com/questions/46831294/convert-each-row-of-pandas-dataframe-to-a-separate-json-string
# Export processed data to JSON format: Process can be refreshed to update database.
json_file = df.apply(lambda x: x.to_json(),axis=1)
json_file.to_json('../data/app_data.json')
# pd.to_pickle('../data/archive_data.pkl')

json_file2 = df2.apply(lambda x: x.to_json(),axis=1)
json_file2.to_json('../data/alternate_addresses.json')