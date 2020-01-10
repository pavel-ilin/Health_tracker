# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

# Conversation.destroy_all
# Message.destroy_all
#
# MyLocation.destroy_all
# LocationRating.destroy_all

user1 = User.create(username: 'oneil', password: '123', name: 'Oneil', email: 'oneil@gmail.com', zipcode: 10034)
user2 = User.create(username: 'john', password: '123', name: 'John Speck', email: 'john@gmail.com', zipcode: 11209)

