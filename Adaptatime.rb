class Task

	attr_reader :task_name
	attr_reader :due_date
	attr_reader :task_length
	attr_reader :recurring_type
	attr_reader :description
	attr_reader :notes
	attr_reader :start_date
	attr_reader :end_date
	
	
	def initialize ( start_date = 3, task_length = 6,task_name="New", due_date = Time.new,  recurring_type = 0, description = "", notes = "",end_date = 0)
	
		@task_name = task_name
		@due_date = due_date
		@task_length = task_length
		@recurring_type=recurring_type
		@description=description
		@notes=notes
		@start_date=start_date
		@end_date=end_date
	end 
end 
class Schedule
	
	def initialize (day_length = 48)
		@day_length = day_length
		@schedule = Array.new(@day_length,0)

	end 
	# def create_schedule
		
	# end 
	
	def add_task (task)
		taskStart = ""
		taskLength = task.task_length
		conditionMet =""
		scheduleSlice1 = @schedule.slice(task.start_date,task.start_date + task.task_length+1)
		for x in scheduleSlice1
			puts "printing"
			if x == 0
				puts "x was 0"
				zeroCount=0
				taskStart = scheduleSlice1.index(x)
				slicedSchedule2 = scheduleSlice1.slice(taskStart, (taskStart+taskLength))
				puts "about to print slice2"
				puts slicedSchedule2
				puts "pprinted"
				for y in slicedSchedule2
					if y == 0
						zeroCount += 1
						puts "zeroCount = #{zeroCount}"
					end
				end
				puts taskLength
				if zeroCount == taskLength
						z=0
						while z < taskLength
							puts "about to modify"
							@schedule[task.start_date+taskStart+z]= 1
							z+=1
						end
						conditionMet = "met"
						puts "met"
						puts @schedule
						puts "It worked"
					
					
					return @task_name, taskStart, task.task_length
				end
					
			end			
			# lengthTask = task.task_length
			# endCondition=""
			# puts "#{lengthTask} is the length of the Task"
			# @@schedule.each do
				# |x|
				# if x == 0
					# puts "x was equal to zero"
					# startIndex = @@schedule.index(x)
					# puts "start index is #{startIndex}"
					# zeroCounter=0
					# @@schedule.slice!(startIndex,startIndex + lengthTask).each do
					# |x|
					# if x == 0 
						# zeroCounter+=1
					# else 
						# zeroCounter=zeroCounter
					# end
					# if zeroCounter == lengthTask
						# @@schedule.slice!(startIndex,startIndex + (lengthTask-1)).map {|x| 1}
						# puts "met"
						# puts @@schedule
						# endCondition = "met"
					# end 
					
				
				# end
			# end until endCondition == "met"
		end
	end
end
puts "r"
testTask = Task.new()
testTask2 = Task.new(0,2)
schedule = Schedule.new
schedule.add_task(testTask)
puts "done with task 1"
schedule.add_task(testTask2)	
puts "done with task 2"

puts schedule	
		