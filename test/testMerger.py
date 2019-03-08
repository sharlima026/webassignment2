import sys
sys.path.append('..py')
import merger
import unittest

# def main():

first_names = ["ashida","tom","shelly","kyle","nicholas"]
last_names = ["ali","brady","ann","defreitas","mendez"]

# merge2Single Test Cases
print(' merge2Single Test Cases ')
def testmerge2single(arr1, arr2, ans):
    res = merge2Single(arr1, arr2)
    if res == ans:
        print("true")
    else:
        print('false')
testmerge2single(first_names, last_names,  ['ashida ali','tom brady','shelly ann','kyle defreitas','nicholas mendez'])


print(' merge2object ')
def testmerge2Object(arr1, arr2, ans):
    res = merge2Object(arr1, arr2)
    if res == ans:
        print("true")
    else:
        print('false')
testmerge2Object(first_names, last_names, [{'firstname':'ashida','lastname':'ali'},{'firstname':'tom','lastname':'brady'},
{'firstname':'shelly','lastname':'ann'},{ 'firstname':'kyle','lastname':'defreitas'},{'firstname':'nicholas','lastname':'mendez'}])


if__name__=='__main__':
    merger.main()
     