class AddReferenceToCenters < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :center, null: false, foreign_key: true
  end
end
