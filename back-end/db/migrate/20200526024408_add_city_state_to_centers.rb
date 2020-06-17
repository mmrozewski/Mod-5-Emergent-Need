class AddCityStateToCenters < ActiveRecord::Migration[6.0]
  def change
    add_column :centers, :cityState, :string
  end
end
