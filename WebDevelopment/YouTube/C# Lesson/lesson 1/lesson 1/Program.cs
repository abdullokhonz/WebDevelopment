using System;
using System.Globalization;
using System.Threading;
using System.Linq;

namespace lesson_1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Введите ваше имя: ");
            //string name = Console.ReadLine();
            //Console.WriteLine($"Привет, {name}!");
            //Console.WriteLine("Нажмите любую клавишу для выхода...");
            //Console.ReadKey();

            //string a = "qwerty";
            //Console.WriteLine(a);

            //string data;
            //data = Console.ReadLine();
            //Console.WriteLine("Hi " + data + "!!!");
            //Console.WriteLine(Console.Read());

            /*string str = "1.8";

            NumberFormatInfo numberFormatInfo = new NumberFormatInfo()
            {
                NumberDecimalSeparator = ".",
            };

            double a = Convert.ToDouble(str, numberFormatInfo);

            Console.WriteLine(a);*/

            //lesson 1
            //float a = 2; float b = 3;
            //Console.WriteLine((a + b) / 2);

            //lesson 2
            //string a = Console.ReadLine();
            //string b = Console.ReadLine();
            //string c = Console.ReadLine();
            //int sum = int.Parse(a) + int.Parse(b) + int.Parse(c);
            //Console.WriteLine("Summa: " + sum);
            //int pro = int.Parse(a) * int.Parse(b) * int.Parse(c);
            //Console.WriteLine("Proizvideniye: " + pro);
            //System.Threading.Thread.Sleep(1000);
            int[] myArray = new int[] { 1, 2, 3 };
            int result = myArray.Min();
            Console.WriteLine(result);
        }
    }
}