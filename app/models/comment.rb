class Comment < ApplicationRecord
    #relationshsips
    belongs_to :review
    belongs_to :user

    #validations
    validates :content, length: {minimum:1, maximum:250}
end
