# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Hospital.destroy_all 
Center.destroy_all


h1 = Hospital.create(name: "Princeton-Plainsboro Teaching Hospital", location: "40.353038 -74.637701", cityState: "Princeton, NJ")

c1 = Center.create(name: "Plainsboro Medical Equipment Distribution Center", location: "40.314267 -74.586888", cityState: "West Windsor Township, NJ")

u1 = User.create(name: "Lisa Cuddy", username: "lcuddy", password: "greghouse221b", hospital: h1, center: c1)