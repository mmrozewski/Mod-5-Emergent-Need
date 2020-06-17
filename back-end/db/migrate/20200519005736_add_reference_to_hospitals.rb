class AddReferenceToHospitals < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :hospital, null: false, foreign_key: true
  end
end
