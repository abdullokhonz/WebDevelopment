using System;

namespace homework_1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // ex_1
            double firstValue, secondValue;

            Console.WriteLine("Введите число 1");

            firstValue = double.Parse(Console.ReadLine());

            Console.WriteLine("Введите число 2");

            secondValue = double.Parse(Console.ReadLine());

            double result = (firstValue + secondValue) / 2;

            Console.WriteLine("Средние арифматическое двух чисел = " + result);
        }
    }
}
