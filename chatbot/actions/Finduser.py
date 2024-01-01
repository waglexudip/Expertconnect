import requests 
import json



def Finduser(user):
    headers={
        "Content-Type": "application/json"
    }
    r = requests.get('http://localhost:5000/find/'+user,headers=headers) 


    data = r.json()
    if(len(data)==1):
        result = (data[0]["username"])+' is the developer with the rating'+'['+str((data[0]["rating"]))+'] '+'in the '+ (data[0]["field"])+' category out of ['+str((data[0]["totalraters"]))+']ratings and the email of the user is @'+(data[0]["email"])
        return result
    return 'sorry cannot find the mentioned user.maybe try checking spelling.'
    

# print(finduser("sudip"))