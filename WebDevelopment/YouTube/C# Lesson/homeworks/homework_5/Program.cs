using System;

namespace homework_5
{
    internal class Program
    {
        static void Main(string[] args)
        {
            void calcWithIfElse()
            {
                Console.WriteLine("Виберите операцию: +, -, *, /.");
                string operation = Console.ReadLine();
                Console.WriteLine("Напишите первое число:");
                int a = int.Parse(Console.ReadLine());
                Console.WriteLine("Напишите второе число:");
                int b = int.Parse(Console.ReadLine());
                if (operation == "+")
                {
                    Console.WriteLine("Сумма a и b: " + (a + b));
                }
                if (operation == "-")
                {
                    Console.WriteLine("Разность a и b: " + (a - b));
                }
                if (operation == "*")
                {
                    Console.WriteLine("Произвидение a и b: " + (a * b));
                }
                if (operation == "/")
                {
                    Console.WriteLine("Частное a и b: " + (a / b));
                }
            }
            //calcWithIfElse();
            void calcWithSwitch()
            {
                Console.WriteLine("Виберите операцию: +, -, *, /.");
                string operation = Console.ReadLine();
                Console.WriteLine("Напишите первое число:");
                int a = int.Parse(Console.ReadLine());
                Console.WriteLine("Напишите второе число:");
                int b = int.Parse(Console.ReadLine());
                switch (operation)
                {
                    case "+":
                        Console.WriteLine("Сумма a и b: " + (a + b));
                        break;
                    case "-":
                        Console.WriteLine("Разность a и b: " + (a - b));
                        break;
                    case "*":
                        Console.WriteLine("Произвидение a и b: " + (a * b));
                        break;
                    case "/":
                        Console.WriteLine("Частное a и b: " + (a / b));
                        break;
                }
            }
            //calcWithSwitch();
            void calcWithKeys()
            {
                Console.WriteLine("Напишите первое число:");
                int a = int.Parse(Console.ReadLine());
                Console.WriteLine("Напишите второе число:");
                int b = int.Parse(Console.ReadLine());
                Console.WriteLine("Виберите операцию: +, -, *, /.");
                ConsoleKey consoleKey = Console.ReadKey().Key;
                Console.WriteLine();
                switch (consoleKey)
                {
                    case ConsoleKey.Multiply:
                        Console.WriteLine("Произвидение a и b: " + (a * b));
                        break;
                    case ConsoleKey.Add:
                        Console.WriteLine("Сумма a и b: " + (a + b));
                        break;
                    case ConsoleKey.M:
                        Console.WriteLine("Разность a и b: " + (a - b));
                        break;
                    case ConsoleKey.Divide:
                        Console.WriteLine("Частное a и b: " + (a / b));
                        break;
                    case ConsoleKey.OemPlus:
                        Console.WriteLine("Сумма a и b: " + (a + b));
                        break;
                    case ConsoleKey.OemMinus:
                        Console.WriteLine("Разность a и b: " + (a - b));
                        break;
                    case ConsoleKey.Oem8:
                        Console.WriteLine("Произвидение a и b: " + (a * b));
                        break;
                    default:
                        break;
                }
            }
            //calcWithKeys();
            void tea4erCalcWithSwitch()
            {
                while (true)
                {
                    Console.Clear();
                    double firstValue, secondValue;
                    string action;

                    try
                    {
                        Console.WriteLine("Введите число 1");
                        firstValue = double.Parse(Console.ReadLine());

                        Console.WriteLine("Введите число 2");
                        secondValue = double.Parse(Console.ReadLine());
                    }
                    catch (Exception)
                    {
                        Console.WriteLine("Не удалось преоброзовать строку в число!");
                        Console.ReadLine();
                        continue;
                    }

                    Console.WriteLine("Выберите операцию: '+' '-' '*' '/'");
                    action = Console.ReadLine();

                    switch (action)
                    {
                        case "+":
                            Console.WriteLine(firstValue + secondValue);
                            break;
                        case "-":
                            Console.WriteLine(firstValue - secondValue);
                            break;
                        case "*":
                            Console.WriteLine(firstValue * secondValue);
                            break;
                        case "/":
                            if (secondValue == 0)
                                Console.WriteLine(0);
                            else
                                Console.WriteLine(firstValue / secondValue);
                            break;
                        default:
                            Console.WriteLine("Ошибка! Неизвестное действие!");
                            break;
                    }
                    Console.ReadLine();
                }
            }
            tea4erCalcWithSwitch();
            void tea4erCalcWithIfElse()
            {
                double firstValue, secondValue;
                string action;

                Console.WriteLine("Введите число 1");
                firstValue = double.Parse(Console.ReadLine());

                Console.WriteLine("Введите число 2");
                secondValue = double.Parse(Console.ReadLine());

                Console.WriteLine("Выберите операцию: '+' '-' '*' '/'");
                action = Console.ReadLine();

                if (action == "+")
                {
                    Console.WriteLine(firstValue + secondValue);
                }
                else if (action == "-")
                {
                    Console.WriteLine(firstValue - secondValue);
                }
                else if (action == "*")
                {
                    Console.WriteLine(firstValue * secondValue);
                }
                else if(action == "/")
                {
                    if (secondValue == 0)
                        Console.WriteLine(0);
                    else
                        Console.WriteLine(firstValue / secondValue);
                }
                else
                {
                    Console.WriteLine("Ошибка! Неизвестное действие!");
                }
            }
            //tea4erCalcWithIfElse();
        }
    }
}
