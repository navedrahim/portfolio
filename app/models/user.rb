class User < ApplicationRecord
  has_many :projects

  has_secure_password

  validates :username, :password, presence: true
  validates :password, length: { minimum: 6 }
end
