class AddEventsTable < ActiveRecord::Migration[6.0]
    def change
        create_table :events do |t|
            t.string :title
            t.text :description
            t.text :thoughts
            t.text :feelings
            t.text :behaviours
            t.references :user
            t.references :goal
            t.timestamps
        end
    end
end
