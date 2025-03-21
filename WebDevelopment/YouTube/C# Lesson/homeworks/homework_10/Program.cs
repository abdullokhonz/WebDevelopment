using System;

namespace homework_10
{
    internal class Program
    {
        /*
        static int ex_2(int elem)
        {
            int i = 0;
            int[] myArray = { 11, 21, 31 };
            while (myArray[i] != elem)
            {
                if (myArray[i] == elem)
                {
                    Console.WriteLine('!');
                    break;
                }
                i++;
            }
            return i;
        }
        */
        static void Main(string[] args)
        {
            //ex_2(21);
            int[] myArray = GetRandomArray(10, -20, 10);

            int result = IndexOf(myArray, 1);
            Console.WriteLine(result);
        }
        static int[] GetRandomArray(uint length, int minValue,  int maxValue)
        {
            int[] myArray = new int[length];

            Random random = new Random();
            for (int i = 0; i < length; i++)
            {
                myArray[i] = random.Next(minValue, maxValue);
            }

            return myArray;
        }
        static int IndexOf(int[] array, int value)
        {
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i] == value)
                {
                    return i;
                }
            }
            return -1;
        }
    }
}
