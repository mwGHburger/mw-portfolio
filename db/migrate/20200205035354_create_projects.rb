class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :project_link
      t.string :project_thumbnail
      t.string :description

      t.timestamps
    end
  end
end
