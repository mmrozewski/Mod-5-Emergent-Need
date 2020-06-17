class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :hospital_id, :center_id
end
