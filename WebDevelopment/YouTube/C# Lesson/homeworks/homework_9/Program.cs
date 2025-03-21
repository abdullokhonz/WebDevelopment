using System;

namespace homework_9
{
    internal class Program
    {
        static string ex_1(string str, uint count)
        {
            string res = "";
            for (int i = 0; i < count; i++)
            {
                res += str;
                Console.WriteLine(str);
            }
            return res;
        }
        static void Main(string[] args)
        {
            Console.Write("STR = ");
            string str = Console.ReadLine();
            Console.Write("COUNT = ");
            uint count = uint.Parse(Console.ReadLine());
            Console.WriteLine(ex_1(str, count));
            Console.Write("Char = ");
            char ch = Console.ReadKey().KeyChar;
            Console.Write("\nCOUNT CHAR = ");
            uint count_ch = uint.Parse(Console.ReadLine());
            Console.WriteLine(ex_1_v2(ch, count_ch));
        }
        static string ex_1_v2(char str, uint count)
        {
            string res = "";
            for (int i = 0; i < count; i++)
            {
                res += str;
                Console.WriteLine(str);
            }
            return res;
        }
    }
}
