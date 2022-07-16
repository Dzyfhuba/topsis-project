# using flask_restful
from flask import Flask, jsonify, request, Response
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin


from topsis import topsis
import pandas as pd
import ast
import json
import io
import csv

# creating the flask app
app = Flask(__name__)
corst = CORS(app, resources={
	r"/*" : {
		"origin" : [
                "http://localhost:3000", 
                "http://localhost:3001",
                "https://topsis.hafidzubaidillah.com"
              ]
	}
})

# creating an API object
api = Api(app)


# making a class for a particular resource
# the get, post methods correspond to get and post requests
# they are automatically mapped by flask_restful.
# other methods include put, delete, etc.
class Hello(Resource):

	# corresponds to the GET request.
	# this function is called whenever there
	# is a GET request for this resource
	def get(self):

		return jsonify({'message': 'hello world'})

	# Corresponds to POST request
	def post(self):
		
		data = request.get_json()	 # status code
		return jsonify({'data': data}), 201


# another resource to calculate the square of a number
class Square(Resource):

	def get(self, num):

		return jsonify({'square': num**2})

class TOPSIS(Resource):
    def post(self):
        data = pd.DataFrame(request.get_json())
        mats = data[['id', 'parent_statuses_id', 'parents_expense', 'parents_income', 'grade_point_average', 'organizations_id']]
        rest = data.drop(['id', 'parent_statuses_id', 'parents_expense', 'parents_income', 'grade_point_average', 'organizations_id'], axis=1)
        mats.to_csv('mats.csv', index=False)
        t = topsis('mats.csv', '5,1,3,5,4', '-,-,-,+,-')
        
        result = []
        
        with open('ordered.csv', 'r') as f:
            reader = csv.reader(f)
            for row in reader:
                result.append({'id': row[1], 
                    #    'parent_statuses_id': row[2], 
                    #    'parents_expense': row[3],
                    #    'parents_income': row[4],
                    #    'grade_point_average': row[5],
                    #    'organizations_id': row[6],
                       'rank': row[7]
                       })


        return result
        

# adding the defined resources along with their corresponding urls
api.add_resource(Hello, '/')
api.add_resource(Square, '/square/<int:num>')
api.add_resource(TOPSIS, '/topsis')

# driver function
if __name__ == '__main__':

	app.run(debug = True)
