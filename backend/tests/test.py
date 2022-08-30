


# generators
#
# def is_palindrome(num):
#     # Skip single-digit inputs
#     if num // 10 == 0:
#         return False
#     temp = num
#     reversed_num = 0
#
#     while temp != 0:
#         reversed_num = (reversed_num * 10) + (temp % 10)
#         temp = temp // 10
#
#     if num == reversed_num:
#         return True
#     else:
#         return False
#
#
# def infinite_palindromes():
#     num = 0
#     while True:
#         if is_palindrome(num):
#             i = (yield num)
#             if i is not None:
#                 num = i
#         num += 1
#
#
# pal_gen = infinite_palindromes()
# for i in pal_gen:
#     digits = len(str(i))
#     pal_gen.send(10 ** (digits))

#
# def square_numbers(nums):
#     for i in nums:
#         yield (i*i)
#
#
# my_nums = square_numbers([1, 2, 3, 4, 5])
#
# for num in my_nums:
#     print(num)


# def parent(num):
#     def first_child():
#         return "Hi, I am Emma"
#
#     def second_child():
#         return "Call me Liam"
#
#     if num == 1:
#         return first_child
#     else:
#         return second_child
#
#
# first = parent(1)
# second = parent(2)
#
# print(first())


