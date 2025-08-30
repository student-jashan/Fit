# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS
# import os

# # Path to the build folder
# build_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../frontend/build")

# app = Flask(__name__, static_folder=build_path)
# CORS(app)

# # API route
# @app.route("/api/frontend-data", methods=["POST"])
# def receive_frontend_data():
#     data = request.json
#     print("Received data from frontend:", data)
#     return jsonify({"message": "Data received successfully", "receivedData": data})

# # Serve React frontend
# @app.route("/", defaults={"path": ""})
# @app.route("/<path:path>")
# def serve(path):
#     if path != "" and os.path.exists(os.path.join(build_path, path)):
#         return send_from_directory(build_path, path)
#     else:
#         return send_from_directory(build_path, "index.html")

# if __name__ == "__main__":
#     app.run(port=5000, debug=True)
