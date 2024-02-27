
def get_destiny_number(date_of_birth):
    destiny_number = 0
    for digit in date_of_birth:
        if digit == '-':
            continue
        destiny_number += int(digit)
        # print(destiny_number)
        if destiny_number > 9:
            destiny_number -= 9 if destiny_number/10 > 0 else 0

    return destiny_number


def get_root_number(date_of_birth):
    date_of_birth = date_of_birth[0:2]
    root_number = get_destiny_number(date_of_birth)
    return root_number


def main():
    date_of_birth = input('Enter date of birth in DD-MM-YYYY format: ')
    root = get_root_number(date_of_birth)
    destiny = get_destiny_number(date_of_birth)
    print(f'root no: {root}\n destiny no: {destiny}')


if __name__ == '__main__':
    main()
