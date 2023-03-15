puts "seeding data..."

#user data
puts "seeding user data..."
jessie = User.create!(username:"jessielove", password:"jessie123", email:"jessielove@gmail.com", profile_img:"https://i.postimg.cc/mkYJJ2Bv/pexels-pixabay-220938.jpg")
damian = User.create!(username:"damianlockwood", password:"damian123", email:"damianlockwood@yahoo.com", profile_img:"https://i.postimg.cc/Vkmr37Bp/pexels-dominika-roseclay-2023384.jpg")
puts "user data seeded!"

#review data
puts "seeding review data..."
 levittown = Review.create!(place_name:"Levittown", experience:"felt uncomfortable I got so many hateful stares ", reccommendations: "no reccomendations", safeness:"unsafe for poc", review_likes:20, user_id:damian.id )
 center_city = Review.create!(place_name:"Center City", experience:"center city is so fun, so many things to do!", reccommendations:"I would highly reccommend insomnia cookie! omg i've never had anything like it!", safeness:"safe for all", review_likes:5, user_id:damian.id )
 scottsdale = Review.create!(place_name:"Scottsdale", experience:"wen't with my girlfriend we got so many stares but I did'nt feel scared", reccommendations: "I would highly reccomend this place called th yard house in on brown ave", safeness:"safe but lgbtq+ proceed with caution", review_likes:12, user_id:jessie.id )
 times_square = Review.create!(place_name:"Times Square", experience:"crowded but I had lots of fun", reccommendations:"would reccomend carmine's italian restaurant on 200 w 44th st", safeness:"safe for poc", review_likes:44, user_id: jessie.id)
puts "review data seeded!"

#location data
puts "seeding location data..."
Location.create!(address:"levittown, pa", review_id: levittown.id )
Location.create!(address: "center city, philadelphia, pa", review_id:center_city.id )
Location.create!(address:"scottsdale, arizona", review_id:scottsdale.id )
Location.create!(address:"times square, manhattan, ny", review_id:times_square.id )
puts "location data seeded!"

#comment data
puts "seeding comment  data..."
Comment.create!(content:"I had a similar experience", review_id: levittown.id, user_id:jessie.id)
Comment.create!(content:"agreed!", review_id: center_city.id, user_id:jessie.id)
Comment.create!(content:"glad you still felt safe", review_id:scottsdale.id, user_id:damian.id)
Comment.create!(content:"that's great!", review_id:times_square.id, user_id:damian.id)
puts "comment data seeded!"


puts "data seeded! ✅"
