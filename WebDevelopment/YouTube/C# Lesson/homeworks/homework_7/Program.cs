using System;

namespace homework_7
{
    internal class Program
    {
        static void Main(string[] args)
        {
            void triangle_1()
            {
                Console.Write("Введите высоту треугольника: ");
                int height = int.Parse(Console.ReadLine());
                for (int i = 0; i < height; i++)
                {
                    for (int j = 0; j <= i; j++)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }
            }
            //triangle_1();
            void triangle_2()
            {
                Console.Write("Введите высоту треугольника: ");
                int height = int.Parse(Console.ReadLine());
                for(int i = 0;i < height; i++)
                {
                    for(int j = height; j > i; j--)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }
            }
            //triangle_2();
            void trianlgle_3()
            {
                Console.Write("Введите высоту треугольника: ");
                int height = int.Parse(Console.ReadLine());
                for (int i = 0; i < height; i++)
                {
                    for (int j = height; j > i; j--)
                    {
                        Console.Write(" ");
                    }
                    for (int j = 0; j <= i; j++)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }
            }
            //trianlgle_3();
            void trianlgle_3_v2()
            {
                Console.Write("Введите высоту треугольника: ");
                int height = int.Parse(Console.ReadLine());
                for (int i = 0; i < height; i++)
                {
                    Console.SetCursorPosition(height - i, i + 1);
                    for (int j = 0; j <= i; j++)
                    {
                        Console.Write("*");
                    }
                }
            }
            //trianlgle_3_v2();
            void triangle_4()
            {
                Console.Write("Введите высоту треугольника: ");
                int height = int.Parse(Console.ReadLine());
                for (int i = 0; i < height; i++)
                {
                    for (int j = 0; j <= i; j++)
                    {
                        Console.Write(" ");
                    }
                    for (int j = height; j > i; j--)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }
            }
            //triangle_4();
            Console.ReadLine();
        }
    }
}
