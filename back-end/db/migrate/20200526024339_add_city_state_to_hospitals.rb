class AddCityStateToHospitals < ActiveRecord::Migration[6.0]
  def change
    add_column :hospitals, :cityState, :string
  end
end
