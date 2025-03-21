using System;

namespace homework_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // ex_2
            double firstValue, secondValue, thirdValue;

            Console.WriteLine("Введите число 1");

            firstValue = double.Parse(Console.ReadLine());

            Console.WriteLine("Введите число 2");

            secondValue = double.Parse(Console.ReadLine());

            Console.WriteLine("Введите число 3");

            thirdValue = double.Parse(Console.ReadLine());

            double sumResult = firstValue + secondValue + thirdValue;

            double multResult = firstValue * secondValue * thirdValue;

            Console.WriteLine("Сумма трёх чисел " + sumResult);

            Console.WriteLine("Произвидние трёх чисел " + multResult);
        }
    }
}
