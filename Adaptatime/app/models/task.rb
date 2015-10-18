class Task < ActiveRecord::Base
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
end
