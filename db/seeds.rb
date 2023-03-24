puts "seeding data..."

#user data
puts "seeding user data..."
jessie = User.create!(username:"jessielove", password:"jessie123", email:"jessielove@gmail.com", profile_img:"https://i.postimg.cc/mkYJJ2Bv/pexels-pixabay-220938.jpg")
damian = User.create!(username:"damianlockwood", password:"damian123", email:"damianlockwood@yahoo.com", profile_img:"https://i.postimg.cc/Vkmr37Bp/pexels-dominika-roseclay-2023384.jpg")
puts "user data seeded!"


#location data
puts "seeding location data..."
levittown = Location.create!(address:"levittown, pa")
center_city = Location.create!(address: "center city, philadelphia, pa" )
scottsdale = Location.create!(address:"scottsdale, arizona" )
times_square = Location.create!(address:"times square, manhattan, ny")
puts "location data seeded!"

#review data
puts "seeding review data..."
 levittown_review = Review.create!(place_name:"Levittown", experience:"felt uncomfortable I got so many hateful stares ", recommendations: "no reccomendations", safeness:"unsafe for poc", review_likes:20, user_id:damian.id, location_id: levittown.id )
 center_city_review = Review.create!(place_name:"Center City", experience:"center city is so fun, so many things to do!", recommendations:"I would highly reccommend insomnia cookie! omg i've never had anything like it!", safeness:"safe for all", review_likes:5, user_id:damian.id, location_id: center_city.id )
 scottsdale_review = Review.create!(place_name:"Scottsdale", experience:"wen't with my girlfriend we got so many stares but I did'nt feel scared", recommendations: "I would highly recommend this place called th yard house in on brown ave", safeness:"safe but lgbtq+ proceed with caution", review_likes:12, user_id:jessie.id, location_id: scottsdale.id  )
 times_square_review = Review.create!(place_name:"Times Square", experience:"crowded but I had lots of fun", recommendations:"would reccomend carmine's italian restaurant on 200 w 44th st", safeness:"safe for poc", review_likes:44, user_id: jessie.id, location_id:times_square.id )
puts "review data seeded!"

#comment data
puts "seeding comment  data..."
Comment.create!(content:"I had a similar experience",comment_likes: 0, review_id: levittown_review.id)
Comment.create!(content:"agreed!", comment_likes: 5,review_id: center_city_review.id )
Comment.create!(content:"glad you still felt safe",comment_likes: 9, review_id:scottsdale_review.id )
Comment.create!(content:"that's great!",comment_likes: 0, review_id:times_square_review.id)
puts "comment data seeded!"


puts "data seeded! ✅"
