# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: 'oneil', password: '123', name: 'Oneil', email: 'oneil@gmail.com', zipcode: 10034)
user2 = User.create(username: 'john', password: '123', name: 'John Speck', email: 'john@gmail.com', zipcode: 11209)


def blood_pressure_seed
  user3 = User.create(username: 'pavel', password: '123', name: 'Pavel Ilin', email: 'pavel_ilin@yahoo.com', zipcode: 10034)

  systolic_array = [127, 126, 123, 142, 134, 135, 151, 131, 121, 124, 122, 125, 136, 136, 139, 113, 123, 116, 143, 128, 122, 128, 124, 134, 127, 148, 138, 123, 118]
  diastolic_array = [78, 75, 80, 93, 75, 100, 96, 97, 93, 85, 94, 82, 97, 85, 99, 82, 93, 75, 95, 81, 88, 94, 83, 93, 85, 102, 93, 87, 86]
  puls_array = [90, 90, 90, 90, 98, 112, 112, 98, 87, 122, 90, 76, 97, 78, 82, 80, 100, 124, 89, 88, 113, 93, 99, 99, 73, 98, 119, 97, 92]
  stress_level_array = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 40, 100, 80, 20, 40, 40, 70, 20, 40, 30, 20, 40]


  array_length = systolic_array.length
  index = 0
  while array_length > 0
    user3.blood_pressures.create(systolic: systolic_array[index], diastolic: diastolic_array[index], puls: puls_array[index], stress_level: stress_level_array[index])
    index += 1
    array_length -= 1
  end
end

blood_pressure_seed()


