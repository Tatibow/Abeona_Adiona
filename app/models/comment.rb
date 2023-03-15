class Comment < ApplicationRecord
    #relationshsips
    belongs_to :review

    #validations
    validates :content, length: {minimum:1, maximum:250}
end
