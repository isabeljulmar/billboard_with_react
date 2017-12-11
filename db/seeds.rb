#Billboard.create(title: 'Top 100')
#puts "Billboard created"

10.times do
    Song.create( song: 'songs', title: Faker::HowIMetYourMother.catch_phrase)
end