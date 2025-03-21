using System;

namespace homework_3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double UsdToRub = 91.90;
            double UsdToTjs = 10.96;
            double USD;

            Console.WriteLine("Введите сумму в USD");

            USD = double.Parse(Console.ReadLine());

            Console.WriteLine(USD + " USD в RUB " + USD * UsdToRub);

            Console.WriteLine(USD + " USD в TJS " + USD * UsdToTjs);
        }
    }
}
