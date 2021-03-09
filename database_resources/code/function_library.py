'''
General & Specific functions for Data Cleaning & Pre-Processing
Documentation is included for each function:
'''

import numpy as np
import pandas as pd

def na_fixer(num):
    if num == 'Not Available':
        num = np.nan
        return num
    else:
        num = float(num)
        return num
    
# Initial but not exhaustive investigation of spelling mistakes in address values.
def spell_fix(name):
    name = str(name)
    if 'Huntingtn' in name:
        name = 'Huntington'
        return name
    else:
        return name
    
# Priority for all caps recognition on left join:
def suffix_maker(name):
    if 'Avenue' in name:
        name = name.replace('Avenue','AVE')
        return name
    elif 'St.' in name:
        name = name.replace('St.','ST')
        return name
    elif 'Ave.' in name:
        name = name.replace('Ave.','AVE')
        return name
    elif 'Ave' in name:
        name = name.replace('Ave','AVE')
        return name
    elif 'Road' in name:
        name = name.replace('Road','RD')
        return name
    elif 'Street' in name:
        name = name.replace('Street','ST')
        return name
    elif 'Square' in name:
        name = name.replace('Square','SQ')
        return name
    elif 'Place' in name:
        name = name.replace('Place','PL')
        return name
    elif 'Highway' in name:
        name = name.replace('Highway','HW')
        return name
    elif 'Parkway' in name:
        name = name.replace('Parkway','PW')
        return name
    else:
        return name
    
# Priority for address matching on left join:
def char_remove(name):
    if '.' in name:
        name = name.replace('.','')
        return name
    elif '(' in name:
        name = name.replace('(','')
        return name
    elif ')' in name:
        name = name.replace(')','')
        return name
    else:
        return name

def uppercase(name):
    name = name.upper()
    return name

def lowercase(name):
    name = name.lower()
    return name

# Spelling correction for matching addresses:
def e_place(name):
    name = str(name)
    if name[-2:] == 'AV':
        name = name + 'E'
        return name
    else:
        return name
    
def space_fix(name):
    if ' S' in name:
        name = name.replace(' ','')
        return name
    else:
        return name
    
def space_fix_num(name):
    name = name.replace(' ','')
    return name

def str_make(name):
    return str(name)

def num_fix(num):
    if not num[:2].isnumeric():
        num = 'NULL'
        return num
    else:
        return num
    
# first digit was missing from many Boston area zip codes:
def zip_fix(num):
    if len(num) == 4:
        num = '0' + num
        return num
    else:
        return num

def type_namer(name):
    '''
    Edge Case exhaustive method for condensing wide array of categories of Building Type feature:
    '''
    if 'Public Assembly' in name or 'Track' in name or 'Ice' in name or 'tclub' in name or 'Movie' in name or 'Stadium' in name or 'Museum' in name or 'Recreati' in name or 'Indoor' in name or 'Performing' in name or 'Fitness' in name or 'Social' in name:
        name = 'Entertainment - Public Assembly'
    elif 'Single' in name or 'Veterina' in name or 'Other - Services' in name or 'Wholesale' in name or 'Util' in name or 'Power' in name or 'Parking' in name or 'Labora' in name or 'Worship' in name or 'Repair' in name or 'Auto' in name or 'None' in name:
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
    elif 'Court' in name or 'Barra' in name or 'Public' in name or 'Library' in name or 'Police' in name or 'Fire' in name:
        name = 'Government Facility'
        return name
    elif 'Financial' in name:
        name = 'Office'
        return name
    else:
        return name