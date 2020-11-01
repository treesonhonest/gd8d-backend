package com.lingcheng.gd8d;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.lingcheng.gd8d");

        noClasses()
            .that()
            .resideInAnyPackage("com.lingcheng.gd8d.service..")
            .or()
            .resideInAnyPackage("com.lingcheng.gd8d.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.lingcheng.gd8d.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
