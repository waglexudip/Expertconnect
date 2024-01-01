# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
# from rasa_sdk.executor import FormAction
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from .Finduser import Finduser
from .Findthetop import Findthetop
from .Email import Email
from rasa_sdk.events import SlotSet

class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_gettop"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        cate = tracker.get_slot("cat").lower()
        result = Findthetop(cate)
        dispatcher.utter_message(result)

        return []




class ActionHelloWord(Action):

    def name(self) -> Text:
        return "action_userinfo"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        reso = tracker.latest_message.get("text")
        reso =reso[1:]
        res = Finduser(reso)
        dispatcher.utter_message(res)

        return []

class ActionHel(Action):

    def name(self) -> Text:
        return "action_askm"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        reso = tracker.latest_message.get("text")[1:]
        SlotSet("usere", reso)
        dispatcher.utter_message("Type the message like this: message:your actual message ")
        return []

class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_sendmail"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        us= tracker.get_slot("usere")
        mes= tracker.latest_message.get("text")[8:]
        wet = Email(euser=us,message=mes)
        dispatcher.utter_message(wet)

        return []
    


    
