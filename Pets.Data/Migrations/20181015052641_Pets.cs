using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Pets.Data.Migrations
{
    public partial class Pets : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Pets");

            migrationBuilder.CreateTable(
                name: "Parent",
                schema: "Pets",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    Name_LastName = table.Column<string>(maxLength: 50, nullable: true),
                    Name_FirstName = table.Column<string>(maxLength: 50, nullable: true),
                    Name_MiddleName = table.Column<string>(maxLength: 50, nullable: true),
                    Address_StreetAddress1 = table.Column<string>(maxLength: 50, nullable: true),
                    Address_StreetAddress2 = table.Column<string>(maxLength: 50, nullable: true),
                    Address_City = table.Column<string>(maxLength: 50, nullable: true),
                    Address_State = table.Column<string>(maxLength: 2, nullable: true),
                    Address_Zip = table.Column<string>(maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parent", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pet",
                schema: "Pets",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 75, nullable: true),
                    MicrochipNumber = table.Column<string>(maxLength: 150, nullable: true),
                    BirthDate = table.Column<DateTime>(nullable: true),
                    ParentID = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pet", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Pet_Parent_ParentID",
                        column: x => x.ParentID,
                        principalSchema: "Pets",
                        principalTable: "Parent",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicalRecord",
                schema: "Pets",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    PetID = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalRecord", x => x.ID);
                    table.ForeignKey(
                        name: "FK_MedicalRecord_Pet_PetID",
                        column: x => x.PetID,
                        principalSchema: "Pets",
                        principalTable: "Pet",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecord_PetID",
                schema: "Pets",
                table: "MedicalRecord",
                column: "PetID");

            migrationBuilder.CreateIndex(
                name: "IX_Pet_ParentID",
                schema: "Pets",
                table: "Pet",
                column: "ParentID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MedicalRecord",
                schema: "Pets");

            migrationBuilder.DropTable(
                name: "Pet",
                schema: "Pets");

            migrationBuilder.DropTable(
                name: "Parent",
                schema: "Pets");
        }
    }
}
