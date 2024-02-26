# from name_meanings import meanings


def get_name_total(name):
    table = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 3, 'H': 5,
        'I': 1, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 7, 'P': 8,
        'Q': 1, 'R': 2, 'S': 3, 'T': 4, 'U': 6, 'V': 6, 'W': 6, 'X': 5,
        'Y': 1, 'Z': 7, '*': 0
    }

    total = 0
    four_or_eight_flag = True
    for letter in name:
        if letter == ' ':
            continue
        LETTER = letter.capitalize()
        if table[LETTER] == 4 or table[LETTER] == 8:
            four_or_eight_flag *= 0
        else:
            four_or_eight_flag *= 1
        total += table[LETTER if LETTER in table else '*']

    return total, four_or_eight_flag


def main():
    while True:
        print("\nType 1 to quit")
        name = input("ENTER NAME: ")
        if (name == '1'):
            break
        total, four_or_eight_flag = get_name_total(name)
        print(total)
        print('Has 4 or 8? ', 'No' if four_or_eight_flag else 'Yes')
        # if total in meanings:
        #     print('MEANING: ', meanings[total]['meaning'])
        #     print('RESULT: ', meanings[total]['result'])
        # else:
        #     print('meaning coming soon...')


if __name__ == '__main__':
    main()
