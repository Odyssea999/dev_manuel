---
id: state
title: Gestion d'Etat
---

# Gestion des états 

## Cubit et GetIt

Cubit est utilisé comme gestionnaire d'état dans l'application pour séparer la logique métier de l'interface utilisateur.

### Configuration de Cubit: 

- Création des Cubits: Définissez les Cubits nécessaires pour gérer l'état de votre fonctionnalité. Vous devez définir les Cubits dans des fichiers séparés pour une meilleure organisation. (Exemple :[Login](../lib/screens/auth/login/login_screen.dart))

- Implémentation de la logique métier : Dans chaque Cubit, implémentez la logique métier nécessaire pour gérer l'état de la fonctionnalité. Cela peut inclure la gestion des états de chargement, de succès et d'erreur, ainsi que les interactions avec les services backend.

- Exportation des événements : Exportez les événements nécessaires depuis le Cubit pour déclencher les changements d'état. Par exemple, pour le Cubit de connexion, vous pouvez exporter des événements tels que LoginStarted, LoginSuccess, et LoginFailure.

### Fourniture de Cubit

Une fois que vos Cubits sont configurés, vous devez les fournir aux widgets qui en ont besoin. Voici comment le faire :

- Utilisation de BlocProvider : Utilisez le widget BlocProvider pour fournir les Cubits à vos widgets. Passez le Cubit approprié (AuthenticationCubit) comme argument. Par exemple : 

    ``` dart 

        MultiBlocProvider(providers: 
            [BlocProvider<AuthenticationCubit>(
            create: (context) => GetIt.instance<AuthenticationCubit>(),
        )], child: MaterialApp.router(
            
            debugShowCheckedModeBanner: false,
            routerDelegate: router.routerDelegate,
            routeInformationProvider: router.routeInformationProvider,
            routeInformationParser: router.routeInformationParser,
            title: 'Odyssea',
            theme: ThemeData(
                brightness: Brightness.dark,
                scaffoldBackgroundColor: AppColors.backgroundColor,
                useMaterial3: true,
                appBarTheme: const AppBarTheme(
                backgroundColor: Color(0xFF2896DC),
                ),
            ),
            ),)
    ```

- ``Enregistrement des Cubits`` : Dans votre fichier dependencies.dart, assurez-vous d'enregistrer les Cubits à l'aide de GetIt. Voici comment le faire : 
    
    ```dart 
    import 'package:get_it/get_it.dart';
    import 'package:goaway/screens/auth/login/authentication_cubit.dart';

    final GetIt getIt = GetIt.instance;
    /// Register all the dependencies for get_it to manage them
    void setupDependencies() {
    getIt.registerSingleton<AuthenticationCubit>(AuthenticationCubit());
    }
    ```

### Utilisation de BlocConsumer
Maintenant que vos Cubits sont fournis aux widgets, vous pouvez utiliser BlocConsumer pour reconstruire les parties de votre interface utilisateur en fonction des changements d'état dans les Cubits. Voici comment utiliser BlocConsumer :

- Reconstruction réactive de l'interface utilisateur: Utilisez BlocConsumer pour reconstruire les parties de votre interface utilisateur en réponse aux changements d'état dans le Cubit. Par exemple, pour afficher différents widgets en fonction de l'état de la connexion, vous pouvez utiliser BlocConsumer comme suit :

    ```dart
    BlocConsumer<AuthenticationCubit, AuthenticationState>(
                bloc: authCubit,
                listener: (context, state) {
                if (state is Success) {
                    GoRouter.of(context).go("/home");
                }
                },
                builder: (context, state) {
                switch (state) {
                    case Initial _:
                    return ConnectionFormWidget(
                        formKey: _formKey,
                        emailController: emailController,
                        passwordController: passwordController,
                        state: state,
                        context: context,
                    );
                    case Loading _:
                    return const CircularProgressIndicator();
                    default:
                    return const Text("Error");
                }
                },
            )
    ``` 

    En suivant ces étapes, vous pouvez configurer un BlocProvider dans app.dart pour fournir les Cubits à l'application et enregistrer les Cubits dans setupDependencies dans dependencies.dart pour GetIt. Cela garantit que les Cubits sont disponibles pour être utilisés dans votre application. Et vous pourrez gérer l'état de votre fonctionalité.          


