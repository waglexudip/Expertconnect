import requests 
import json

def Findthetop(cat):
    headers={
        "Content-Type": "application/json"
    }
    r = requests.get('http://localhost:5000/findcoders/'+cat,headers=headers) 


    data = r.json()
    if(len(data)==1):
        result = (data[0]["username"])+' is the developer with the highest rating'+'['+str((data[0]["rating"]))+'] in the '+(data[0]["field"]) +' category out of ['+str((data[0]["totalraters"]))+']ratings'
        return result
    if(len(data)==2):
        result1 = '1.'+(data[0]["username"])+'  with the rating'+'['+str(round((data[0]["rating"]),1))+'] '+'in the '+(data[0]["field"])+' category out of ['+str((data[0]["totalraters"]))+']ratings        '
        result2 = '2.'+(data[1]["username"])+'  with the rating'+'['+str(round((data[1]["rating"]),1))+'] '+'in the '+(data[1]["field"])+' category out of ['+str((data[1]["totalraters"]))+']ratings'
        return result1+result2
    if(len(data)==3):
        result1 = '1.'+(data[0]["username"])+'with the rating'+'['+str(round((data[0]["rating"]),1))+'] '+'in the '+(data[0]["field"])+' category out of ['+str((data[0]["totalraters"]))+']ratings           '
        result2 = '2.'+(data[1]["username"])+'with the rating'+'['+str(round((data[1]["rating"]),1))+'] '+'in the '+(data[1]["field"])+' category out of ['+str((data[1]["totalraters"]))+']ratings           '
        result3 = '3.'+(data[2]["username"])+'with the rating'+'['+str(round((data[2]["rating"]),1))+'] '+'in the '+(data[2]["field"])+' category out of ['+str((data[2]["totalraters"]))+']ratings'
        return result1+result2+result3
    return 'sorry cannot find users in this category.maybe try checking spelling.'
    

# print(findthetop('App developer'))


