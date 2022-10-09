# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding tasks..."

Category.destroy_all

categories = Category.create([
    {
        id: 0,
        name: "Not specified"
    },
    {
        id: 1,
        name: "Exercise"
    },
    {
        id: 2,
        name: "Coding"
    },
    {
        id: 3,
        name: "Chores"
    },  {
        id: 4,
        name: "Shopping"
    }
])

puts "✅ Done seeding!"
