# NYC Database:

# Import Libraries:
import json
import numpy as np
import pandas as pd

# Functions for Processing:
def type_ranker(num):
    if num < 0.25:
        num = 'Most Efficient for Building Type: Low Priority'
        return num
    elif num >= 0.25 and num < 0.5:
        num = 'Moderately Efficient for Building Type: Moderate Priority'
        return num
    elif num >= 0.5 and num < 0.75:
        num = 'Higher Energy use for Building Type: High Priority'
        return num
    elif num >= 0.75:
        num = 'Energy Intensive for Building Type: Highest Priority'
        return num
    else:
        num = 'Moderately Efficient for Building Type: Moderate Priority'
        return num
    
def zip_ranker(num):
    if num < 0.25:
        num = 'Most Efficient for Zip Code: Low Priority'
        return num
    elif num >= 0.25 and num < 0.5:
        num = 'Moderately Efficient for Zip Code: Moderate Priority'
        return num
    elif num >= 0.5 and num < 0.75:
        num = 'Higher Energy use for Zip Code: High Priority'
        return num
    elif num >= 0.75:
        num = 'Energy Intensive for Zip Code: Highest Priority'
        return num
    else:
        num = 'Moderately Efficient for Zip Code: Moderate Priority'
        return num
    
def kwh_sqft_ranker(num):
    if num < 0.25:
        num = 'More Efficient per Sqft: Low Priority'
        return num
    elif num >= 0.25 and num < 0.5:
        num = 'Moderately Efficient per Sqft: Moderate Priority'
        return num
    elif num >= 0.5 and num < 0.75:
        num = 'Higher Energy use per Sqft: High Priority'
        return num
    elif num >= 0.75:
        num = 'Energy Intensive per Sqft: Highest Priority'
        return num
    else:
        num = 'Moderately Efficient per Sqft: Moderate Priority'
        return num
    
def kwh_ranker(num):
    if num < 0.25:
        num = 'Most Efficient by kWh: Low Priority'
        return num
    elif num >= 0.25 and num < 0.5:
        num = 'Moderately Efficient by kWh: Moderate Priority'
        return num
    elif num >= 0.5 and num < 0.75:
        num = 'Higher Energy use by kWh: High Priority'
        return num
    elif num >= 0.75:
        num = 'Energy Intensive by kWh: Highest Priority'
        return num
    else:
        num = 'Moderately Efficient by kWh: Moderate Priority'
        return num
    
def type_namer(name):
    if 'Public Assembly' in name or 'Track' in name or 'Ice' in name or 'tclub' in name or 'Movie' in name or 'Stadium' in name or 'Museum' in name or 'Recreati' in name or 'Indoor' in name or 'Performing' in name or 'Fitness' in name or 'Social' in name:
        name = 'Entertainment - Public Assembly'
    elif 'Single' in name or 'Conven' in name or 'Veterina' in name or 'Repair' in name or 'Other - Services' in name or 'Wholesale' in name or 'Util' in name or 'Power' in name or 'Parking' in name or 'Labora' in name or 'Worship' in name or 'Repair' in name or 'Auto' in name or 'None' in name:
        name = 'Other'
        return name
    elif 'Restaur' in name or 'Food' in name:
        name = 'Dining'
        return name
    elif 'frige' in name or 'Self-S' in name or 'Distribution' in name:
        name = 'Storage Facility'
        return name
    elif 'Mall' in name:
        name = 'Mall'
        return name
    elif 'Ambula' in name or 'Medical' in name or 'Urgent' in name or 'Hospital' in name or 'Therap' in name or 'Care' in name:
        name = 'Medical Facility'
        return name
    elif 'School' in name or 'Dayc' in name or 'Educat' in name or 'College' in name:
        name = 'Education - School'
        return name
    elif 'Court' in name or 'Barra' in name or 'Public' in name or 'Waste' in name or 'Library' in name or 'Police' in name or 'Fire' in name:
        name = 'Government Facility'
        return name
    elif 'Financial' in name:
        name = 'Office'
    else:
        return name
    
# retrieve data:
url = 'https://www1.nyc.gov/html/gbee/downloads/excel/nyc_benchmarking_disclosure_2017_consumption_data.xlsx'
df = pd.read_excel(url,sheet_name=1)

# Filter features for application purposes:

df = df[['Property Name','Address 1 (self-reported)','Postal Code',
         'Primary Property Type - Self Selected',
        'List of All Property Use Types at Property','Largest Property Use Type',
        'Largest Property Use Type - Gross Floor Area (ft²)','Year Built',
         'Weather Normalized Site Electricity Intensity (kWh/ft²)',
        'Electricity Use - Grid Purchase (kWh)','Weather Normalized Site Electricity (kWh)',
         'Total GHG Emissions (Metric Tons CO2e)']].copy()

# Rename Columns:
columns_dict = {'Property Name':'property_name','Address 1 (self-reported)':'address','Postal Code':'ZIP',
         'Primary Property Type - Self Selected':'property_type',
        'List of All Property Use Types at Property':'all_types',
                'Largest Property Use Type':'main_property_type',
        'Largest Property Use Type - Gross Floor Area (ft²)':'sqft_main_type','Year Built':'year_built',
         'Weather Normalized Site Electricity Intensity (kWh/ft²)':'kWh_sqft_electricity',
        'Electricity Use - Grid Purchase (kWh)':'total_electricity_use_kWh',
                'Weather Normalized Site Electricity (kWh)':'weather_norm_kWh_electricity',
         'Total GHG Emissions (Metric Tons CO2e)':'ghg_emissions_tons_CO2'}

df.rename(columns=columns_dict,inplace=True)

# Nulls can all be removed after examining data:
df.dropna(inplace=True)

# Condense Property Type Categories:
df['property_type'] = df['property_type'].map(type_namer)

# Engineer percentile values: Values for grouped aggregates as well:
df['kWh_sqft_percentile_rank'] = df['kWh_sqft_electricity'].rank(pct=True)
df['total_electric_pctile_rank'] = df['kWh_sqft_electricity'].rank(pct=True)
df['weather_kWh_pctile_rank'] = df['weather_norm_kWh_electricity'].rank(pct=True)
df['ghg_pctile_rank'] = df['ghg_emissions_tons_CO2'].rank(pct=True)
df['kWh_by_type_percentile'] = df.groupby('property_type')[['kWh_sqft_electricity']].rank(pct=True)
df['kWh_by_zip_percentile'] = df.groupby('ZIP')[['kWh_sqft_electricity']].rank(pct=True)

# Engineer Priority Ranking for Application:
df['zipcode_priority'] = df['kWh_by_zip_percentile'].apply(zip_ranker)
df['bld_type_priority'] = df['kWh_by_type_percentile'].apply(type_ranker)
df['kwh_sqft_priority'] = df['kWh_sqft_percentile_rank'].apply(kwh_sqft_ranker)
df['total_kwh_priority'] = df['weather_kWh_pctile_rank'].apply(kwh_ranker)

# Remove remaining Nulls:
df.fillna('Not Available',inplace=True)

# Export to JSON:
json_file = df.apply(lambda x: x.to_json(),axis=1)
json_file.to_json('../data/nyc_data.json')