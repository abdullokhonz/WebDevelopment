using System;
using System.Security.Cryptography;

namespace homework_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            void me()
            {
                int count = 0;
                int limit = int.Parse(Console.ReadLine());
                int even = 0; int odd = 0;
                while (count < limit)
                {
                    count++;
                    Console.WriteLine(count);
                    if (count % 2 != 0)
                        odd++;
                    if (count % 2 == 0)
                        even++;
                }
                Console.WriteLine("Количество чётных чисел: " + even);
                Console.WriteLine("Количество нечётных чисел: " + odd);
            }
            //me();
            void teacher()
            {
                uint oddNumbersCount = 0;
                uint evenNumbersCount = 0;

                int oddNumbersSum = 0;
                int evenNumbersSum = 0;

                Console.WriteLine("Введите первое число диапазона");
                int currentValue = int.Parse(Console.ReadLine());
                Console.WriteLine("Введите последнее число диапазона");
                int limit = int.Parse(Console.ReadLine());

                while (currentValue <= limit)
                {
                    if (currentValue % 2 == 0)
                    {
                        evenNumbersSum += currentValue;
                        evenNumbersCount++;
                    }
                    else
                    {
                        oddNumbersCount++;
                        oddNumbersSum += currentValue;
                    }
                    currentValue++;
                }
                
                Console.WriteLine("Количество нечётных чисел: " + oddNumbersCount);
                Console.WriteLine("Количество чётных чисел: " + evenNumbersCount);
                Console.WriteLine("Сумма нечётных чисел: " + oddNumbersSum);
                Console.WriteLine("Сумма чётных чисел: " + evenNumbersSum);
                Console.ReadLine();
            }
            teacher();
        }
    }
}
