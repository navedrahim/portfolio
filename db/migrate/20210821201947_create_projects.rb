class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :github_link
      t.string :deployed_link
      t.string :description
      t.string :screenshot
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
