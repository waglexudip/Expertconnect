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

# sendmail('waglesudip8@gmail.com','hey i am dip ')