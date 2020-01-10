# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_11_185947) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blood_pressures", force: :cascade do |t|
    t.integer "systolic"
    t.integer "diastolic"
    t.integer "puls"
    t.integer "stress_level"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_blood_pressures_on_user_id"
  end

  create_table "cholesterols", force: :cascade do |t|
    t.integer "ldl"
    t.integer "hdl"
    t.integer "triglycerides"
    t.integer "total_cholesterol"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_cholesterols_on_user_id"
  end

  create_table "metabolic_panels", force: :cascade do |t|
    t.integer "sodium"
    t.integer "glucose"
    t.integer "calcium"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_metabolic_panels_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "email"
    t.integer "zipcode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vitamine_panels", force: :cascade do |t|
    t.integer "d"
    t.integer "b12"
    t.integer "a1"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_vitamine_panels_on_user_id"
  end

  create_table "weights", force: :cascade do |t|
    t.integer "weight"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_weights_on_user_id"
  end

  add_foreign_key "blood_pressures", "users"
  add_foreign_key "cholesterols", "users"
  add_foreign_key "metabolic_panels", "users"
  add_foreign_key "vitamine_panels", "users"
  add_foreign_key "weights", "users"
end
