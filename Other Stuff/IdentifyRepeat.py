file = open('TestFGA.txt', 'r')

for line in file:
    iterator = 0
    count = 0
    input = line.split()
    print (input[6])
    while input[6][iterator:iterator + 4] == 'TTTC':
        count += 1
        iterator += 4
    print('[TTTC] -> ', count)
    print('[', input[6][iterator:iterator + 8], '] -> ', 1)
    iterator += 8
    count = 0
    while input[6][iterator:iterator + 4] == 'CTTT':
        count += 1
        iterator += 4
    print('[CTTT] -> ', count)
    print('[', input[6][iterator:iterator + 4], '] -> ', 1)
    iterator += 4
    count = 0
    while input[6][iterator:iterator + 4] == 'TTCC':
        count += 1
        iterator += 4
    print('[TTCC] -> ', count)

