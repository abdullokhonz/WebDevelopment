using System;

namespace homework_8
{
    internal class Program
    {
        static void Main(string[] args)
        {
            void ex_1()
            {
                //int[] youArray = Enumerable.Repeat(4, 5).ToArray(); [ 4, 4, 4, 4, 4 ]
                //int[] sheArray = Enumerable.Range(4, 5).ToArray(); [ 4, 5, 6, 7, 8 ]

                Console.Write("Сколько нужно элементов в массиве: ");
                int[] myArray = new int[int.Parse(Console.ReadLine())];
                for (int i = 0; i < myArray.Length; i++)
                {
                    Console.Write("Введите " + (i + 1) + " число массива: ");
                    myArray[i] = int.Parse(Console.ReadLine());
                }
                int sum = 0;
                int min = myArray[0];
                Console.WriteLine("\nВывод массива в обратном порядке:");
                for (int i = myArray.Length - 1; i >= 0; i--)
                {
                    Console.WriteLine(myArray[i]);
                    if (myArray[i] % 2 == 0)
                        sum += myArray[i];
                    if (myArray[i] < min)
                        min = myArray[i];
                }
                Console.WriteLine("\nСумма чётных чисел массива: " + sum);
                Console.WriteLine("Минимальное число массива: " + min);
            }
            ex_1();
            Console.ReadLine();
        }
    }
}
