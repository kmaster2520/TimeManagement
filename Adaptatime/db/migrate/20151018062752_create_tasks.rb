class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
	t.task :content
      t.timestamps null: false
    end
  end
end
