# rpp-football-role
Tugas Mata Kuliah Representasi Pengetahuan dan Penalaran

# Library
React (https://facebook.github.io/react/)

# Run

1. npm install
2. npm start



#Paramater
1. Dribbling 
2. Finishing
3. Crossing 
4. Heading
5. Marking
6. Passing
7. Tackling
8. Agility (kelincahan)
9. Balance
10. Speed (kecepatan)
11. Stamina
12. Strength
13. Vision
14. Anticipation
15. GoalKeeping

#Kemungkinan Nilai
1. Bad (0)
2. Medium (1)
3. Good (2)

#Keluaran Posisi
1. Goalkeeper
2. Center Back
3. Wing Back
4. Center Midfielder
5. Winger
6. Attacking Midfilder
7. Striker
8. Perlu latihan lagi :)


#Rule

0. True -> Perlu latihan lagi

Kecuali:

1.
	Passing(Good)
	Tackling(at least Medium)
	Agility(at least Medium)
	Balance(Good)
	Strength(Good)
	Vision(Good)
	--------------------> Center Midfielder

Not center midfielder:
2.
	Passing(at least Medium)
	Balance(at least Medium)
	Speed(Good)
	Crossing(Good)
	Dribbling(Good)
	Stamina(Good)
	Agility(Good)  
	--------------------> Winger

Not Winger:
3. 
	Marking(Good)
	Passing(at least Medium)
	Heading(at least Medium)
	Tackling(Good)
	Strength(Good)
	Balance(Good)
	Anticipating(Good)
	--------------------> Center Back:

Not Center Back
4.
	Marking(at least Medium)
	Passing(at least Medium)
	Tackling(at least Medium)
	Balance(at least Medium)
	Anticipating(at least Medium)
	Speed(Good)
	Crossing(Good)
	Dribbling(at least Medium)
	Stamina(Good)
	--------------------> Wing Back

Not Wing Back:
5.
	Dribbling(at least Medium)
	Finishing(Good)
	Heading(Good)
	Agility(at least Medium)
	Strength(at least Medium)
	--------------------> Sriker

Not Striker:
6.
	Dribbling(at least Medium)
	Finishing(at least Medium)
	Agility(Good)
	Passing(Good)
	Balance(at least Medium)
	Vision(at least Medium)
	--------------------> Attacking Midfielder

Not Attacking Midfielder:
7.
	2 GoalKeeping(Good)
	2 Vision(Good)
	2 Anticipation(Good)
	--------------------> Goalkeeper







  


