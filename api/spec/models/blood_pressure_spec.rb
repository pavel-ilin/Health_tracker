require 'rails_helper'

RSpec.describe BloodPressure, type: :model do
  it "have to have stress level" do

    user2 = User.create!(username: 'john', password: '123', name: 'John Speck', email: 'john@gmail.com', zipcode: 11209)
    blood_pressure1 = user2.blood_pressures.new(systolic: 123, diastolic: 123, puls: 87, stress_level: 100)

    expect(blood_pressure1.valid?).to(be(true))

    blood_pressure1.stress_level = 1000
    expect(blood_pressure1.valid?).to(be(false))
    expect(blood_pressure1.errors[:stress_level]).to include('must be less than or equal to 100')
  end

  # it 'mast have a valid stress level' do
  #   user2 = User.create!(username: 'john', password: '123', name: 'John Speck', email: 'john@gmail.com', zipcode: 11209)
  #   blood_pressure1 = user2.blood_pressures.new(systolic: 123, diastolic: 123, puls: 87, stress_level: 1000)
  #
  #   expect(blood_pressure1.valid?).to(be(false))
  #   pp(blood_pressure1.errors)
  # end
end
