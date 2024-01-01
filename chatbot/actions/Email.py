import requests,smtplib
import json
import smtplib

def sendmail(to,message):
        gmail_user = 'trudd617@gmail.com'
        gmail_pwd = 'zbpk dobb fmmx yxji'
        smtpserver = smtplib.SMTP("smtp.gmail.com",587)
        smtpserver.ehlo()
        smtpserver.starttls()
        smtpserver.ehlo()
        smtpserver.login(gmail_user, gmail_pwd)
        header = 'To:' + to + '\n' + 'From: ' + gmail_user + '\n' + 'Subject:Message from Rasabot \n \n'
        msg = header + message
        smtpserver.sendmail(gmail_user, to, msg)
        smtpserver.quit()


def Email(euser,message):
    headers={
        "Content-Type": "application/json"
    }
    r = requests.get("http://localhost:5000/find/" + euser,headers=headers) 
    r=r.json()
    if(len(r)== 0):
        return 'user doesnot exist'
    eid=r[0]["email"]
    sendmail(eid,message)
    return 'your message has been delivered to the user through email.'

# s= email('sudip','this is rasabot')
# print(s)