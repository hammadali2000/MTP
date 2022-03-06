from flask import Flask, request
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import xlrd
import sys
# from ..server.test import sentiment_scores




app = Flask(__name__)




# @app.route("/members",methods=['POST'])
# def test():
#     print("hassan")
#     data = request.get_json()
#     print(data);
#     return "test"


@app.route("/member",methods=['POST'])
def member():
    data = request.get_json()
    print(data['data']);
    wb = xlrd.open_workbook(r"C:/Users/Ali/Desktop/dataset.xlsx")
    sheet = wb.sheet_by_index(0)
    product_name = data['data']
    review = []
    flag = 0
    for row in range(sheet.nrows):  # Iterate over every rows of the file
        if product_name == sheet.cell_value(row, 3):
            review.append(sheet.cell_value(row, 6))

    lenth = len(review)

    for i in review:
        if review != '':
            flag = 1

    if flag == 1:
        
            # Create a SentimentIntensityAnalyzer object.
        sid_obj = SentimentIntensityAnalyzer()

    # polarity_scores method of SentimentIntensityAnalyzer
    # object gives a sentiment dictionary.
    # which contains pos, neg, neu, and compound scores.
        sentiment_dict = sid_obj.polarity_scores(review)

        print("Overall sentiment dictionary is : ", sentiment_dict)
        print("sentence was rated as ",
            sentiment_dict['neg']*100, "% Negative")
        print("sentence was rated as ", sentiment_dict['neu']*100, "% Neutral")
        print("sentence was rated as ",
            sentiment_dict['pos']*100, "% Positive")

        print("Sentence Overall Rated As", end=" ")

    # decide sentiment as positive, negative and neutral
        if sentiment_dict['compound'] >= 0.05:
            print("Positive")

        elif sentiment_dict['compound'] <= - 0.05:
            print("Negative")

        else:
            print("Neutral")

        print(sentiment_dict)
        return sentiment_dict




if __name__=="__main__":
    app.run(debug=True)