# Washington DC Database

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
url = 'https://opendata.arcgis.com/datasets/a3030a7bccae4f379450b5cd95672859_0.csv'
df = pd.read_csv(url)

# combine city and state columns
df['city'] = df['City'] + ' ' + df['State']

# Filter features for application purposes:
df = df[['Address_of_Record','Owner_of_Record','Property_Name','city',
        'Postal_Code','Primary_Property_Type','Year_Built','_Reported_Building_Gross_Floor_Area_ft�_',
        'Electricity_Use_-_Grid_Purchase_and_Onsite_kWh']].copy()

# Rename Columns:
colmumns_dict = {'Address_of_Record':'address',
 'Owner_of_Record':'owner',
 'Property_Name':'property_name',
 'city':'city',
 'Postal_Code':'ZIP',
 'Primary_Property_Type':'property_type',
 'Year_Built':'year_built',
 '_Reported_Building_Gross_Floor_Area_ft�_':'sqft',
 'Electricity_Use_-_Grid_Purchase_and_Onsite_kWh':'total_electricity_kWh'}

df.rename(columns=colmumns_dict,inplace=True)

# Nulls can all be removed after examining data:
df.dropna(inplace=True)

# Condense Property Type Categories:
df['property_type'] = df['property_type'].map(type_namer)

# Apply String methods for further processing:
df['owner'] = df['owner'].map(lambda x: x.title())
df['sqft'] = df['sqft'].map(lambda x: x.strip())
df['sqft'] = df['sqft'].map(lambda x: x.replace(',',''))
df['sqft'] = df['sqft'].astype(float)
df['ZIP'] = df['ZIP'].map(lambda x: str(x))

# Engineer electricity use per sqft:
df['kWh_per_sqft'] = df['total_electricity_kWh'] / df['sqft']

# Engineer percentile values: Values for grouped aggregates as well:
df['kWh_sqft_percentile_rank'] = df['kWh_per_sqft'].rank(pct=True)
df['total_electric_pctile_rank'] = df['total_electricity_kWh'].rank(pct=True)

df['kWh_by_zip_percentile'] = df.groupby('ZIP')[['kWh_per_sqft']].rank(pct=True)

# Engineer Priority Ranking for Application:
df['zipcode_priority'] = df['kWh_by_zip_percentile'].apply(zip_ranker)
df['kwh_sqft_priority'] = df['kWh_sqft_percentile_rank'].apply(kwh_sqft_ranker)
df['total_kwh_priority'] = df['total_electric_pctile_rank'].apply(kwh_ranker)

# Remove remaining Nulls:
df.fillna('Not Available',inplace=True)

# Export to JSON:
json_file = df.apply(lambda x: x.to_json(),axis=1)
json_file.to_json('../data/dc_data.json')