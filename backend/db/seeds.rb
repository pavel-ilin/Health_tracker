# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Conversation.destroy_all
LocationRating.destroy_all
User.destroy_all
Message.destroy_all
MyLocation.destroy_all

user1 = User.create(username: 'oneal', password: '123', name: 'Oneal', email: 'oneal@gmail.com', zipcode: 10034)

conversation1 = Conversation.create(user_id: user1.id)

message1 = Message.create(user_message: 'hello', ai_respond: 'Hello, how are you?', conversation_id: conversation1.id)


my_location1 = MyLocation.create(title: 'ad', human_address: 'awdadw', location_type: 'awda', county: 'awdd', zipcode: 10034)

location_rating1 = LocationRating.create(rate: 5, comment: 'rg', user_id: user1.id, my_location_id: my_location1.id)